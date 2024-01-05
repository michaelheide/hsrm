import {render, screen, fireEvent} from "@testing-library/react"
import { Button } from "./button"
import { sum } from "./sum"


test('select drop-downs must use the fireEvent.change', () => {
   render(<Button/>) 

   expect(screen.getByTestId("button")).toHaveTextContent("Button")
  })


  describe("test", () =>{
    test("test 1", () =>{
        expect(sum(1,2)).toEqual(3)
    })
  })