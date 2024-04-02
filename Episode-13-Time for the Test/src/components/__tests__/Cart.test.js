import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utills/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


  global.fetch = jest.fn(() => 
         Promise.resolve({
              json: () => Promise.resolve(MOCK_DATA_NAME),
        })
  );

  it("Should Load Restaurant Menu Component",async () =>{

       await act(async () => render(
       <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <Cart/>
            <RestaurantMenu/>
             </Provider>
        </BrowserRouter>
     ));

       const accordionHeader = screen.getByText("Dawate-e-Iftar Delicacies (9)");
       fireEvent.click(accordionHeader);

      expect(screen.getAllByTestId("foodItems").length).toBe(9);

       const addBtns = screen.getAllByRole("button",{name:"Add +"});
        fireEvent.click(addBtns[0]);

        expect(screen.getByText("Cart - (1,items)")).toBeInTheDocument();

        expect(screen.getAllByTestId("foodItems").length).toBe(10);

        fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));

        expect(screen.getAllByTestId("foodItems").length).toBe(9);
        expect(screen.getByText("Cart is Empty please Add items in your Cart")).toBeInTheDocument();
  });