import { Student, StudentDB, FieldMask, MaskBits, LessonType } from './index';

describe('StudentDB tests', () => {

    let db: StudentDB;

    beforeEach(() => {
        db = new StudentDB();
        db.add(new Student('Alex', 'Smith', 20, LessonType.Physics, 9.5))
        db.add(new Student('John', 'Doe', 22, LessonType.Math, 8.0))
    })

    test('findByFirstName should return correct student', () => {
        const result = db.findByFirstName('Alex')
        expect(result.length).toBe(1);
        expect(result[0].lastname).toBe('Smith')
    })

    test('bit mask hides LastName correctly', () => {
        const mask = new FieldMask();
        mask.hide(MaskBits.LastName);

        const student = db.findByFirstName('Alex')[0];
        expect(mask.isVisible(MaskBits.FirstName)).toBe(true);
        expect(mask.isVisible(MaskBits.LastName)).toBe(false);
    })

    test('adding a new student increases DB size', () => {
        db.add(new Student('Alice', 'Brown', 19, LessonType.History, 7.5));
        const result = db.findByFirstName('Alice');
        expect(result.length).toBe(1);
        expect(result[0].grade).toBe(7.5);
    })

    test('invert should toggle all mask bits', () => {
        const mask = new FieldMask(); // все биты = 1 (11111)

        mask.hide(MaskBits.Age);
        mask.hide(MaskBits.Grade);

        expect(mask.isVisible(MaskBits.Age)).toBe(false);
        expect(mask.isVisible(MaskBits.Grade)).toBe(false);

        mask.invert();

        expect(mask.isVisible(MaskBits.Age)).toBe(true);
        expect(mask.isVisible(MaskBits.Grade)).toBe(true);

        expect(mask.isVisible(MaskBits.FirstName)).toBe(false);
        expect(mask.isVisible(MaskBits.LastName)).toBe(false);
        expect(mask.isVisible(MaskBits.Lesson)).toBe(false);
    })
    
    test('merge should combine visible bits from both masks', () => {
        const mask1 = new FieldMask(0b00011); // FirstName + LastName
        const mask2 = new FieldMask(0b11100); // Age + Lesson + Grade

        mask1.merge(mask2);

        expect(mask1.isVisible(MaskBits.FirstName)).toBe(true);
        expect(mask1.isVisible(MaskBits.LastName)).toBe(true);
        expect(mask1.isVisible(MaskBits.Age)).toBe(true);
        expect(mask1.isVisible(MaskBits.Lesson)).toBe(true);
        expect(mask1.isVisible(MaskBits.Grade)).toBe(true);
    });

    test('intersect should keep only common visible bits', () => {
        const mask1 = new FieldMask(0b10101); // FirstName + Age + Grade
        const mask2 = new FieldMask(0b11100); // Age + Lesson + Grade

        mask1.intersect(mask2);

        expect(mask1.isVisible(MaskBits.FirstName)).toBe(false);
        expect(mask1.isVisible(MaskBits.LastName)).toBe(false);
        expect(mask1.isVisible(MaskBits.Age)).toBe(true);   // общий бит
        expect(mask1.isVisible(MaskBits.Lesson)).toBe(false);
        expect(mask1.isVisible(MaskBits.Grade)).toBe(true); // общий бит
    });
})