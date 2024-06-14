import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export const SignUpView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    try {
      const response = await fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Sign up successful. Please log in.");
      } else {
        throw new Error("SignUp failed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicBirthday">
        <Form.Label>Birthday</Form.Label>
        <Form.Control 
          type="text" 
          value={birthday} 
          onChange={(e) => setBirthday(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="primary">Submit</Button>
    </Form>
  );
};
