import { render, screen } from "@testing-library/react";
import React from "react";
import * as redux from "react-redux";
import MRBasketItem from "../components/MRBasket/MRBasketItem";
import { BasketTypes } from "../redux/basket/actions";



describe("MRBasketItem dispatch mock & click", function () {
  const useDispatchSpy = jest.spyOn(redux, "useDispatch");
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  var id = "unique-id";
  let name = "Test 123";
  let price = "1231";
  let count = 14;

  beforeEach(() => {
    render(<MRBasketItem id={id} name={name} price={price} count={count} />);
  });

  it("Should name equal", function () {
    expect(screen.getByTestId("name").innerHTML).toEqual(name);
  });

  it("Should price equal", function () {
    expect(screen.getByTestId("price").innerHTML).toEqual("₺" + price);
  });

  it("Should count equal", function () {
    expect(screen.getByTestId("count").innerHTML).toEqual(count.toString());
  });

  it("Should dispatch ADD_ITEM", function () {
    screen.getByTestId("add").click();
    expect(mockDispatchFn).toHaveBeenCalledWith({
      id: id,
      type: BasketTypes.ADD_ITEM,
    });
  });

  it("Should dispatch REMOVE_ITEM", function () {
    screen.getByTestId("remove").click();
    expect(mockDispatchFn).toHaveBeenCalledWith({
      id: id,
      type: BasketTypes.REMOVE_ITEM,
    });
  });
  useDispatchSpy.mockClear();
});
