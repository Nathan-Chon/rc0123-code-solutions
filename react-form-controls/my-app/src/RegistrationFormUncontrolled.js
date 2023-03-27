export default function RegistrationFormUncontrolled() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log('Uncontrolled', formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label> Username
        <input name="username"></input>
      </label>
      <label> Password
        <input name="password"></input>
      </label>
      <button type="submit">Submit form</button>
    </form>
  )
}
