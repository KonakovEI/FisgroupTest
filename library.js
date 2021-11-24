class Student 
{
    constructor(idStudent, firstName, lastName, secondName) {
        this.idStudent = idStudent
        this.firstName = firstName
        this.lastName = lastName
        this.secondName = secondName
    }
}

class Students{
    constructor(){
        this.Students = []
    }
    newStudent(idStudent, firstName, lastName, secondName){
        let x = new Student(idStudent, firstName, lastName, secondName)
        this.Students.push(x)
        return x
    }
    get Students(){
        return this.Students
    }

    get Students(){
        return this.Students.length
    }
}

class Book
{
    constructor(idBook, idPublishingHouse, idGenre, idAuthor, Name, Year, Copy, Issuing){
        this.idBook = idBook
        this.idPublishingHouse = idPublishingHouse
        this.idGenre = idGenre
        this.idAuthor = idAuthor
        this.Name = Name
        this.Year = Year
        this.Copy = Copy
        this.Issuing = Issuing
    }
}

class Books{
    constructor(){
        this.Books = []
    }
    newBook(idBook, idPublishingHouse, idGenre, idAuthor, Name, Year, Copy, Issuing){
        let x = new Book(idBook, idPublishingHouse, idGenre, idAuthor, Name, Year, Copy, Issuing)
        this.Books.push(x)
        return x
    }
    get Books(){
        return this.Books
    }

    get Books(){
        return this.Books.length
    }
}

class Issuing
{
    constructor(idIssuing, idBook, idStudent, dateIssuing, dateReturn){
        this.idIssuing = idIssuing
        this.idBook = idBook
        this.idStudent = idStudent
        this.dateIssuing = dateIssuing
        this.dateReturn = dateReturn
    }
}

class Issuings{
    constructor(){
        this.Issuings = []
    }
    newIssuing(idIssuing, idBook, idStudent, dateIssuing, dateReturn){
        let x = new Issuing(idIssuing, idBook, idStudent, dateIssuing, dateReturn)
        this.Issuings.push(x)
        return x
    }
    get Issuings(){
        return this.Issuings
    }

    get Issuings(){
        return this.Issuings.length
    }
}

class PublishingHouse
{
    constructor (idPublishingHouse, Name){
        this.idPublishingHouse = idPublishingHouse
        this.Name = Name
    }    
}

class PublishingHouses{
    constructor(){
        this.PublishingHouses = []
    }
    newPublishingHouse(idPublishingHouse, Name){
        let x = new PublishingHouse(idPublishingHouse, Name)
        this.PublishingHouses.push(x)
        return x
    }
    get allPublishingHouses(){
        return this.PublishingHouses
    }

    get numberOfPublishingHouses(){
        return this.PublishingHouses.length
    }
}

class Genre
{
    constructor (idGenre, Name){
        this.idGenre = idGenre
        this.Name = Name
    }
}

class Genres{
    constructor(){
        this.Genres = []
    }
    newGenre(idGenre, Name){
        let x = new Genre(idGenre,Name)
        this.Genres.push(x)
        return x
    }
    get Genres(){
        return this.Genres
    }

    get Genres(){
        return this.Genres.length
    }
}

class Author
{
    constructor(idAuthor, firstName, lastName, secondName) {
        this.idAuthor = idAuthor
        this.firstName = firstName
        this.lastName = lastName
        this.secondName = secondName
    }
}

class Authors{
    constructor(){
        this.Authors = []
    }
    newAuthor(idAuthor, firstName, lastName, secondName){
        let x = new Author(idAuthor, firstName, lastName, secondName)
        this.Authors.push(x)
        return x
    }
    get Authors(){
        return this.Authors
    }

    get Authors(){
        return this.Authors.length
    }
}

function HardCoreReader(idStudent){
    let dateOnReadBook = 14;
    let countBadReader = 0;

    var arr = Issuings;
    //получаем из массива Выдача(Issuings) все записи студента(idStudent)
    var BadReader = arr.filter(function(idStudent){
        return idStudent
    });

    //Количество Операций С Книгами Взял Отдал студента
    for (let i = 0; i < Count(BadReader); i++)
    {        
        //получаем из выборки BadReader все случае когда время сдачи было нарушенно, 
        //      для каждого такого случая в пустую переменную прибавляем 1
        BadReader.filter(function(countBadReader){
            if (dateReturn <= dateIssuing.setDay(dateIssuing.getDay() + dateOnReadBook))
            {
                return countBadReader + 1
            }
        });
        
        //если счетчик нарушений времени сдачи больше 3, то студент 'злостный читатель'
        if (countBadReader > 3){
            return alert(idStudent + ' ' + 'злостный читатель')
        }
    }
}
