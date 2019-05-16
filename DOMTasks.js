class DOMTasks {
    constructor(tasksArray) {
        this.tasksArray = tasksArray;
    }

    createElements() {
        done.innerHTML = '';
        todo.innerHTML = '';
        for (var task of this.tasksArray) {
            this.createElement(task);
        }
    }

    createElement(task) {
        // tworzymy elementy dla pojedynczego zadania
        const li = document.createElement('li');
        li.classList.add("list-group-item", "task-description");
        li.appendChild(document.createTextNode(task.title));
        const p = document.createElement("p");
        p.innerText = task.description;
        const span = document.createElement("span");
        span.classList.add("date");
        span.innerText = task.date;
        const btn = document.createElement("a");
        btn.setAttribute("href", '#');
        btn.classList.add("btn", "float-right");
        // // dodajemy element listy do todo lub done
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(btn);

        if (task.status == "open") {
            btn.classList.add("btn-primary");
            btn.innerText = "Open";
            btn.addEventListener('click',  this.addCloseEvent);
            btn.task = task;
            btn.el = li;
            todo.appendChild(li);
        } else if (task.status == "close") {
            btn.classList.add("btn-success");
            btn.innerText = "Finish";
            btn.addEventListener('click', this.addOpenEvent);
            btn.task = task;
            btn.el = li;
            done.appendChild(li);
        }
    }

    addOpenEvent(event) {
        event.target.task.open();
        done.removeChild(event.target.el);
        appToDo.createElement(event.target.task);
    }

    addCloseEvent(event) {
        event.target.task.close();
        todo.removeChild(event.target.el);
        appToDo.createElement(event.target.task);
    }

    addNewEvent(taskArray) {
        let isValid = true;
        var errors = '';
        for (let input of form.elements) {
            form.elements[input.name] = input;
        }
        const {
            title,
            description,
            date
        } = form.elements;
        if (title.value === "") {
            isValid = false;
            errors += "Wpisz tytuł\n";
        }
        if (description.value === "") {
            isValid = false;
            errors += "Dodaj opis zadania\n";
        }
        if (date.value === "") {
            isValid = false;
            errors += "Podaj datę";
        }
        if (isValid) {
            var newTask = new Task(title.value, description.value, date.value);
            taskArray.push(newTask);
            this.taskArray = taskArray;
            this.createElements();

            for (let input of form.elements) {
                if (form.elements[input.name].value !== "Add") {
                    form.elements[input.name].value = "";
                }
            }
        } else {
            alert(errors);
        }
    }
}