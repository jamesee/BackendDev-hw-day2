import { Button } from "../../../components/button";
import { TextField } from "../../../components/text-field";
import * as React from "react";
import { useRegister } from "../auth.state";
import { useHistory, Link } from "react-router-dom";

export const RegisterForm = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("idle");
  const register = useRegister();
  const history = useHistory();

  return (
    <div className="max-w-md mx-auto m-10 shadow">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setStatus("loading");

          register({ username, email, password })
            .then((response) => {
              // console.log(response)
              setStatus("idle");
              history.push("/");
            })
            .catch((error) => {
              // console.log(error)
              setStatus("error");
            });
        }}
        className="p-6"
      >
        {status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to register.
          </div>
        )}
        <div className="text-3xl mt-4 mb-8 font-extrabold text-center">
          Register User
        </div>
        <div className="space-y-6">
          <TextField
            label="Username"
            value={username}
            onChangeValue={setUsername}
            name="username"
            id="username"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Email"
            value={email}
            onChangeValue={setEmail}
            name="email"
            id="email"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Password"
            value={password}
            onChangeValue={setPassword}
            name="password"
            id="password"
            type="password"
            required
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            Register
          </Button>
        </div>
      </form>
      <div className="text-xl m-5  font-bold text-center">
        <Link
          className="underline text-center text-md leading-relaxed text-pink-500"
          to={`/`}
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};
