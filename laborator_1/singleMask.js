
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


class FieldMask {
    showFirstname: boolean = true;
    showLastname: boolean = true;
    showAge: boolean = true;
    showLesson: boolean = true;
    showGrade: boolean = true;
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
        if (mask.showFirstname) console.log(`FirstName: ${student.firstname}`)
        if (mask.showLastname) console.log(`LastName: ${student.lastname}`)
        if (mask.showAge) console.log(`Age: ${student.age}`)
        if (mask.showLesson) console.log(`Lesson: ${student.lesson}`)
        if (mask.showGrade) console.log(`ShowGrade: ${student.grade}`)

    }
}

enum MaskBits {
    FirstName = 1 << 0,
    LastName = 1 << 1,
    Age = 1 << 2,
    Lesson = 1 << 3,
    Grade = 1 << 4
}

const db = new StudentDB()
db.add(new Student('Alex', 'Smith', 20, LessonType.Physics, 9.5));


const mask = new FieldMask()
mask.showAge = true
mask.showLastname = false
mask.showGrade = false

const found = db.findByFirstName('Alex')
found.forEach(s=> StudentDB.print(s, mask))

