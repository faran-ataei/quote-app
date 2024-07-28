import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
export default function InputSearchAuthor({ setAuthor }) {
  const [inputValue, setInputValue] = useState("");
  async function handleSubmitAuthorName(e) {
    e.preventDefault();
    console.log(inputValue);
    setAuthor(() => {
      return inputValue;
    });
    setInputValue("");
  }
  return (
    <Box
      component="form"
      onSubmit={handleSubmitAuthorName}
      flexWrap={"nowrap"}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
      color={"#021024"}
    >
      <div>
        <FormGroup row sx={{ flexWrap: "nowrap", alignItems: "end" }}>
          <TextField
            value={inputValue}
            id="standard-textarea"
            label="Author Name"
            placeholder="Search Quotes Of One Author"
            multiline
            variant="standard"
            inputProps={{ style: { color: "#052659" } }}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="submit"
            size="small"
            sx={{
              p: 0,
              m: 0,
              minWidth: "max-content",
              minHeight: "max-content",
              height: "max-content",
              mb: 1,
              color: "#686D76",
            }}
          >
            <SearchOutlinedIcon fontSize="small" />
          </Button>
        </FormGroup>
      </div>
    </Box>
  );
}