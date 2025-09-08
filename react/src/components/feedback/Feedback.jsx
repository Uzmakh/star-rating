import StarRating from "../starRating/StarRating";

const Feedback = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    textarea: {
      marginTop: 18,
      border: "1px solid gray",
      borderRadius: 5,
      width: 300,
      minHeight: 100,
      padding: 10,
    },
    button: {
      marginTop: 18,
      border: "1px solid gray",
      borderRadius: 5,
      width: 300,
      padding: 10,
      cursor: "pointer",
    },
  };
  return (
    <div style={styles.container}>
      <StarRating />
      <textarea
        name="feedback"
        placeholder="What's your feedback?"
        style={styles.textarea}
      />
      <button style={styles.button}>Submit</button>
    </div>
  );
};

export default Feedback;
