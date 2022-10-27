import CategorySelector from "../components/CategorySelector/CategorySelector";
import { render } from '@testing-library/react'

describe("CategorySelector component", () => {
    test('render test CategorySelector', () => {

        const {getByTestId} = render(<CategorySelector />)
        expect(getByTestId('selector-container')).toBeValid()
        expect(getByTestId('selector-title')).toHaveTextContent("Select Category")

    })
})