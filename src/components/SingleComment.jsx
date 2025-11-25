import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI0NjJiZmRiYzJkODAwMTVmMDAxNzMiLCJpYXQiOjE3NjM5OTIyNTUsImV4cCI6MTc2NTIwMTg1NX0.nd57k10iQCYbBUSYStaxFr3ZE8uQZCCc2HuipBDa5B8",
          },
        }
      );

      if (response.ok) {
        alert("La recensione è stata eliminata!");
      } else {
        throw new Error("Errore nell'eliminazione");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
