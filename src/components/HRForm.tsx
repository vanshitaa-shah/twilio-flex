import { submitTaskToFlex } from "../twilioService";

function HrForm() {
  const handleSubmit = async(event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Simulate sending data to Flex (replace with your integration logic)
    
    const query=  formData.get("message");
    await submitTaskToFlex('HR', {query:query});
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>HR Inquiry</h2>
      <label htmlFor="message">Query:</label>
      <br />
      <textarea id="message" name="message" required></textarea>
      <br />
      <button type="submit">Submit Inquiry</button>
    </form>
  );
}

export default HrForm;
