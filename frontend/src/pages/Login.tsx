// import { Box, Button, Group, TextInput } from "@mantine/core";
// import React, { useState } from "react";

// import {
//   hasLength,
//   isEmail,
//   isNotEmpty,
//   matches,
//   useForm,
// } from "@mantine/form";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const form = useForm({
//     initialValues: {
//       name: "",
//       password: "",
//       email: "",
//       confirmPassword: "",
//     },

//     validate: {
//       name: hasLength({ min: 2, max: 10 }, "Name must be 2-10 characters long"),
//       password: hasLength({ min: 6 }, "Passwordmust be 6 characters long"),
//       email: isEmail("Invalid email"),
//       confirmPassword: matches(form.getFieldValue("password"), "Passwords must match"),
//     },
//   });
//   return (
//     <Box
//       component="form"
//       maw={400}
//       mx="auto"
//       onSubmit={form.onSubmit(() => {})}
//     >
//       <TextInput
//         label="Name"
//         placeholder="Name"
//         withAsterisk
//         {...form.getInputProps("name")}
//       />
//       <TextInput
//         label="Your email"
//         placeholder="Your email"
//         withAsterisk
//         mt="md"
//         {...form.getInputProps("email")}
//       />
//       <TextInput
//         label="Password"
//         placeholder="Enter your password"
//         withAsterisk
//         mt="md"
//         {...form.getInputProps("password")}
//       />
//       <TextInput
//         label=" Confirm Password"
//         placeholder="Confirm ypur password"
//         withAsterisk
//         mt="md"
//         {...form.getInputProps("password")}
//       />
//       <Group position="right" mt="md">
//         <Button type="submit">Submit</Button>
//       </Group>
//     </Box>
//   );
// };

// export default Login;
import React from "react";

const Login = () => {
  return <div>Login</div>;
};

export default Login;
