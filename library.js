
class Student {
    constructor(idStudent, firstName, lastName, secondName) {
        this.idStudent = idStudent
        this.firstName = firstName
        this.lastName = lastName
        this.secondName = secondName
    }
}

class Book{
    constructor(idBook, idPublishingHouse, idGenre, idAuthor, Name, Year, Copy, Issuing){
        this.idBook = idBook
        this.idPublishingHouse = PublishingHouse.idPublishingHouse
        this.idGenre = Genre.idGenre
        this.idAuthor = Author.idAuthor
        this.Name = Name
        this.Year = Year
        this.Copy = Copy
        this.Issuing = Issuing
    }
}

class Issuing{
    constructor(idIssuing, idBook, idStudent, dateIssuing, dateReturn){
        this.idIssuing = idIssuing
        this.idBook = Book.idBook
        this.idStudent = Student.idStudent
        this.dateIssuing = dateIssuing
        this.dateReturn = dateReturn
    }
}

class PublishingHouse{
    constructor (idPublishingHouse, Name){
        this.idPublishingHouse = idPublishingHouse
        this.Name = Name
    }
}

class Genre{
    constructor (idGenre, Name){
        this.idGenre = idGenre
        this.Name = Name
    }
}

class Author{
    constructor(idAuthor, firstName, lastName, secondName) {
        this.idAuthor = idAuthor
        this.firstName = firstName
        this.lastName = lastName
        this.secondName = secondName
    }
}
