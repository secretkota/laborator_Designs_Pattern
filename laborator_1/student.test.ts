import { Student, StudentDB, FieldMask, MaskBits, LessonType } from './index';

describe('StudentDB tests', () => {
    
    let db: StudentDB;

    beforeEach(() => {
        db = new StudentDB();
        db.add(new Student('Alex', 'Smith', 20, LessonType.Physics, 9.5));
        db.add(new Student('John', 'Doe', 22, LessonType.Math, 8.0));
    });

    test('findByFirstName should return correct student', () => {
        const result = db.findByFirstName('Alex');
        expect(result.length).toBe(1);
        expect(result[0].lastname).toBe('Smith');
    });

    test('bit mask hides LastName correctly', () => {
        const mask = new FieldMask();
        mask.hide(MaskBits.LastName);

        const student = db.findByFirstName('Alex')[0];
        expect(mask.isVisible(MaskBits.FirstName)).toBe(true);
        expect(mask.isVisible(MaskBits.LastName)).toBe(false);
    });

    test('adding a new student increases DB size', () => {
        db.add(new Student('Alice', 'Brown', 19, LessonType.History, 7.5));
        const result = db.findByFirstName('Alice');
        expect(result.length).toBe(1);
        expect(result[0].grade).toBe(7.5);
    });
});