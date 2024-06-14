import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

export const ProfileView = ({ onLoggedIn }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [username, setUsername] = useState(user.Username);
  const [email, setEmail] = useState(user.Email);
  // const [password, setPassword] = useState(user.Password);
  const [birthday, setBirthday] = useState(user.Birthday);

  const handleSubmit = (event) => {
    // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      // Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://sheltered-brook-80862-fdde9bb54fcc.herokuapp.com/users/"+user._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((response) => {
      console.log(response)
      if (response.ok) {
        onLoggedIn(username);
      } else {
        alert("Edited failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>
        Username:
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Label>
      {/* <Form.Label>
        Password:
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Label> */}
      <Form.Label>
        email:
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
        />
              <Form.Label>
        birthday:
        <Form.Control
          type="text"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </Form.Label>
      </Form.Label>
      <Button type="submit" className="primary">Submit</Button>
    </Form>
  );
};