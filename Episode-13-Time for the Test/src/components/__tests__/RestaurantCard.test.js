import { render,screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should RestaurantCard component with props Data", () => {


      render(<RestaurantCard resData={MOCK_DATA}/>)

    const name =  screen.getByText("Chai Sutta Bar");

    expect(name).toBeInTheDocument();


});