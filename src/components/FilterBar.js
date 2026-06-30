import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from "@mui/material";

function FilterBar({
  filter,
  setFilter
}) {

  return (
    <Box sx={{ marginTop: 3 }}>

      <FormControl fullWidth>

        <InputLabel>
          Notification Type
        </InputLabel>

        <Select
          value={filter}
          label="Notification Type"
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>

        </Select>

      </FormControl>

    </Box>
  );
}

export default FilterBar;