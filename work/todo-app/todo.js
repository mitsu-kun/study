function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (text === '') return;
    
    const li = document.createElement('li');
    li.textContent = text;
    li.onclick = () => li.classList.toggle('done');
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.onclick = () => li.remove();
    
    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}

document.getElementById('todoInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});
