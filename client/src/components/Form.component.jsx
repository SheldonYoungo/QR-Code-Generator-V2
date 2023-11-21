export function Form({ inputValue, changeHandler, submitHandler }) {
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={changeHandler} placeholder='www.google.com'/>
      <button className="formBtn" type="submit">Search</button>
    </form>
  )
}