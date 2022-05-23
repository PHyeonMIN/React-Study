class Todo {
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;

// 타입 스크립트는 미리 프로퍼티를 정의하고 
// 해당 프로퍼티에 어떤 타입을 가진 값이 저장되는지 명확히 밝혀야한다.