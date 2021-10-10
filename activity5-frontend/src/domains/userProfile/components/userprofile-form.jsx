import { Button } from "../../../components/button";
import { TextField } from "../../../components/text-field";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../auth";
import { load } from "dotenv";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "api";

const updateProfile = (token, { company, department, designation }) =>
  fetch(`${BASE_URL}/user-details`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      company,
      department,
      designation,
    }),
  }).then((response) => {
    return response.json();
  });

const getProfile = (token, signal) =>
  fetch(`${BASE_URL}/user-details`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    signal,
  }).then((response) => {
    return response.json();
  });

export const UserProfileForm = () => {
  const [company, setCompany] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [mystatus, setMystatus] = React.useState(() => {
    return { message: "", status: "idle" };
  });
  const history = useHistory();
  const auth = useAuth();
  const ab = new AbortController();

  const loadProfile = (token, signal) => {
    setIsLoading(true);
    getProfile(token, signal).then((data) => {
      if (data.error) {
        setMystatus({ ...mystatus, message: data.error, status: "error" });
      } else if (data) {
        // console.debug(data);
        const { company, department, designation } = data;
        setCompany(company);
        setDepartment(department);
        setDesignation(designation);
      }
      setIsLoading(false);
    });
  };

  React.useEffect(() => {
    if (auth.status !== "authenticated") {
      return;
    }
    const token = localStorage.getItem("auth");
    loadProfile(token, ab.signal);

    return () => {
      ab.abort();
    };
  }, [auth]);

  return (
    <div className="max-w-md mx-auto m-10 shadow">
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          setMystatus({ ...mystatus, status: "loading" });
          if (auth.status === "authenticated") {
            const token = localStorage.getItem("auth");
            updateProfile(token, { company, department, designation })
            .then((data) => {
                console.log(data);
                const { company, department, designation } = data;
                setCompany(company);
                setDepartment(department);
                setDesignation(designation);
                setMystatus({ ...mystatus, status: "idle" });
                history.push("/");
              }
            );
          }
        }}
        className="p-6"
      >
        {mystatus.status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            {mystatus.message}
          </div>
        )}
        <div className="space-y-6">
          <TextField
            label="Company"
            value={company}
            onChangeValue={setCompany}
            name="company"
            id="company"
            autoFocus
            required
            disabled={mystatus.status === "loading"}
          />
          <TextField
            label="Department"
            value={department}
            onChangeValue={setDepartment}
            name="department"
            id="department"
            autoFocus
            required
            disabled={mystatus.status === "loading"}
          />
          <TextField
            label="Designation"
            value={designation}
            onChangeValue={setDesignation}
            name="designation"
            id="designation"
            required
            disabled={mystatus.status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={mystatus.status === "loading"}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};
