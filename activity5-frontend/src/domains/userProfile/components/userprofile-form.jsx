import { Button } from "../../../components/button";
import { TextField } from "../../../components/text-field";
import * as React from "react";
import { useHistory } from "react-router-dom";
import {useAuth} from "../../auth";


// const BASE_URL = "http://localhost:5000";
const BASE_URL = "api";


const updateProfile = (token, {company, department, designation}) =>
fetch(`${BASE_URL}/user-details`, {
  method: "POST",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify({
    company,
    department,
    designation,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  })
  .catch((error) => console.log(error));


  const getProfile = (token, signal) =>
    fetch(`${BASE_URL}/user-details`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        signal
      })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
        })
    .catch(error => {
        console.log(error)
    });

export const UserProfileForm = () => {
  const [company, setCompany] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [designation, setDesignation] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false)
  const [status, setStatus] = React.useState("idle");
  const history = useHistory();
  const auth = useAuth();

  const loadProfile = (token, signal) => {
    setIsLoading(true);
    getProfile(token, signal)
        .then((data) => {
            if (data){
                console.log(data)
                const {company, department, designation} = data
                setCompany(company);
                setDepartment(department);
                setDesignation(designation);
            }
            setIsLoading(false);
        });
}

  React.useEffect(() => {
    const ab = new AbortController();
    const token = localStorage.getItem('auth')

    if (auth.status !== "authenticated") {
      return;
    }
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
          setStatus("loading");
          const token = localStorage.getItem('auth')
          updateProfile(token, {company, department, designation})
            .then(() => {
              setStatus("idle");
              history.push("/");
            })
            .catch((error) => {
              setStatus("error");
            });
        }}
        className="p-6"
      >
        {status === "error" && (
          <div className="p-2 text-red-800 bg-red-200 rounded-sm">
            Fail to update.
          </div>
        )}
        {/* <div className="text-3xl mt-4 mb-8 font-extrabold text-center">
          User Profile
        </div> */}
        <div className="space-y-6">
          `
          <TextField
            label="Company"
            value={company}
            onChangeValue={setCompany}
            name="company"
            id="company"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Department"
            value={department}
            onChangeValue={setDepartment}
            name="department"
            id="department"
            autoFocus
            required
            disabled={status === "loading"}
          />
          <TextField
            label="Designation"
            value={designation}
            onChangeValue={setDesignation}
            name="designation"
            id="designation"
            required
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};
