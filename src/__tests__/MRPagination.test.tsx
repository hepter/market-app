import { render, screen } from "@testing-library/react";
import React from "react";
import MRPagination from "../components/MRPagination";



describe("MRPagination mock & click", function () {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    render(
      <MRPagination
        forcePage={1}
        onPageChange={mockOnChange}
        pageCount={5}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
      />
    );
  });

  it("Should be click next", async function () {
    (await screen.findByText("Next")).click();
    expect(mockOnChange).toHaveBeenCalledWith({ selected: 2 });
  });
  it("Should be click previous", async function () {
    (await screen.findByText("Prev")).click();
    expect(mockOnChange).toHaveBeenCalledWith({ selected: 0 });
  });
});
