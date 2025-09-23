/**
 * уроки которые может посещать студент
 */
enum LessonType {
    Math = "Math",
    Physics = "Physics",
    Chemistry = "Chemistry",
    History = "History",
    Literature = "Literature"
}

/**
 * Описания сущности студента
 */
class Student {
    firstname: string
    lastname: string
    age: number
    lesson: LessonType
    grade: number

    /**
     * 
     * @param firstname Имя студента
     * @param lastname Фамилия студента
     * @param age Возраст
     * @param lesson Урок который посещает
     * @param grade оценка
     */
    constructor(firstname: string, lastname: string, age: number, lesson: LessonType, grade: number) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.lesson = lesson
        this.grade = grade
    }
}

/**
 * Биты маски для показа нужной
 */
enum MaskBits {
    FirstName = 1 << 0,
    LastName = 1 << 1,
    Age = 1 << 2,
    Lesson = 1 << 3,
    Grade = 1 << 4
}


/**
 * Маска которая позволяет показыать нужные поля и скрывать
 */
class FieldMask {
    mask: number;
    /**
     * 
     * @param mask  Битовое значение, по умолчанию все видно
     */
    constructor(mask: number = 0b11111) {
        this.mask = mask
    }
    /**
     * сделать поле видимым
     * @param bit бит поля
     */
    show(bit: MaskBits) {
        this.mask |= bit 
    }
    /**
     * Скрыть поле
     * @param bit бит поля
     */
    hide(bit: MaskBits) {
        this.mask &= ~bit
    }
    /**
     * проверить видимость поля
     * @param bit бит поля
     * @returns true если поле видимо
     */
    isVisible(bit: MaskBits): boolean {
        return (this.mask & bit) !== 0
    }
    /**
     * объединить 1 маску с другой
     * @param other маска
     */
    merge(other: FieldMask) {
        this.mask |= other.mask
    }
    /**
     * Оставить только пересекающие поля масок
     * @param other маска
     */
    intersect(other: FieldMask) {
        this.mask &= other.mask
    }
    /**
     * Инвертирование маски (показать скрытые, скрыть показанные)
     */
    invert() {
        this.mask = ~this.mask & 0b11111
    }
}
/**
 * Эмуляция базы данных
 */
class StudentDB {
    private students: Student[] = []
    /**
     * добавить студента
     * @param student 
     */
    add(student: Student) {
        this.students.push(student)
    }
    /**
     * Найти студентов по имени
     * @param name 
     * @returns Список студентов с таким именем
     */
    findByFirstName(name: string): Student[] {
        return this.students.filter(stud => stud.firstname === name)
    }
    /**
     * Вывести студента в колнсоль с учетом маски
     * @param student 
     * @param mask 
     */
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