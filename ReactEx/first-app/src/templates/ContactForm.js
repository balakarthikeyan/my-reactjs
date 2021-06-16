import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Typography
} from "@material-ui/core";
/* import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'; */
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(JSON.stringify(this.state));
  }  
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: 20,
          padding: 20
        }}
      >
      <form autoComplete="off" onSubmit={this.handleSubmit}>
          <h1>Contact Form</h1>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </FormControl>

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </FormControl>

          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Enter Phone"
            margin="normal"
            variant="outlined"
          />

          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input id="message" multiline rows={10} value={this.state.message} onChange={this.handleChange} />
          </FormControl>

          <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit}>
            Send
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;