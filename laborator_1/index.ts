
enum LessonType {
    Math = "Math",
    Physics = "Physics",
    Chemistry = "Chemistry",
    History = "History",
    Literature = "Literature"
}


class Student {
    firstname: string;
    lastname: string
    age: number;
    lesson: LessonType;
    grade: number;

    constructor(firstname: string, lastname: string, age: number, lesson: LessonType, grade: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.lesson = lesson;
        this.grade = grade;
    }
}

enum MaskBits {
    FirstName = 1 << 0,
    LastName = 1 << 1,
    Age = 1 << 2,
    Lesson = 1 << 3,
    Grade = 1 << 4
}



class FieldMask {
    mask: number;

    constructor(mask: number = 0b11111) {
        this.mask = mask
    }

    show(bit: MaskBits) {
        this.mask |= bit 
    }

    hide(bit: MaskBits) {
        this.mask &= ~bit
    }

    isVisible(bit: MaskBits): boolean {
        return (this.mask & bit) !== 0
    }

    merge(other: FieldMask) {
        this.mask |= other.mask
    }

    intersect(other: FieldMask) {
        this.mask &= other.mask
    }

    invert() {
        this.mask = ~this.mask & 0b11111
    }
}

class StudentDB {
    private students: Student[] = []

    add(student: Student) {
        this.students.push(student)
    }

    findByFirstName(name: string): Student[] {
        return this.students.filter(stud => stud.firstname === name)
    }

    static print(student: Student, mask: FieldMask) {
        if (mask.isVisible(MaskBits.FirstName)) console.log(`FirstName: ${student.firstname}`)
        if (mask.isVisible(MaskBits.LastName)) console.log(`LastName: ${student.lastname}`)
        if (mask.isVisible(MaskBits.Age)) console.log(`Age: ${student.age}`)
        if (mask.isVisible(MaskBits.Lesson)) console.log(`Lesson: ${student.lesson}`)
        if (mask.isVisible(MaskBits.Grade)) console.log(`ShowGrade: ${student.grade}`)

    }
}

const db = new StudentDB()
db.add(new Student('Alex', 'Smith', 20, LessonType.Physics, 9.5));


const mask = new FieldMask()
mask.hide(MaskBits.LastName)


const found = db.findByFirstName('Alex')
found.forEach(s=> StudentDB.print(s, mask))

export { Student, StudentDB, FieldMask, MaskBits, LessonType }