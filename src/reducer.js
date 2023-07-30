let state = { count: 0 };
// let action = { type: "counter/increment" };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  render() 
}


function render(){
  const app = document.querySelector("#app")
  app.textContent = state.count
  const button = document.createElement('button')
  app.appendChild(button).textContent = 'button'
  button.addEventListener('click', () => {
    dispatch({ type: "counter/increment"})
  })
}

render()
