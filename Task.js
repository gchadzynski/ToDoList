class Task {
    constructor(title, description, date) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.status = "open";
    }
  
    getInfo() {
      return "Zadanie: ${title} Data: ${date} Description: ${description}";
    }
  
    close() {
      this.status = "close"
    }
  
    open() {
      this.status = "open"
    }
  
  }