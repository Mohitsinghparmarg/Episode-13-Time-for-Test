import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",() => {


    // beforeAll(() => {
    //       console.log("before All");
    // });

    // beforeEach(() => {
    //     console.log("before Each");
    //  });

    //  afterEach(() => {
    //     console.log("before Each");
    //  });

    //  afterAll(() => {
    //     console.log("before All");
    //  });



    it("Shuold load contact us component",() =>{
        render(<Contact/>);
        const heading =  screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("Shuold load button inside Contact component",() =>{
        render(<Contact/>);
        const button =  screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    it("Shuold load input name inside Contact component",() =>{

        render(<Contact/>);

        const inputName =  screen.getByPlaceholderText("name");

        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes on the Contact component",() => {

          render(<Contact/>)
          // Querying
          const inputBoxes = screen.getAllByRole("textbox");
           
    
           expect(inputBoxes.length).toBe(2);
    })
});