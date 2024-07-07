#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input_css_file output_css_file"
    exit 1
fi

INPUT_FILE=$1
OUTPUT_FILE=$2

# Check if the input file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Input file not found!"
    exit 1
fi

# Read the input file, remove all occurrences of '.rdp-', and write to the output file
sed 's/\.rdp-/\./g' "$INPUT_FILE" > "$OUTPUT_FILE"
