import { useAPI, APIContextProvider } from "../API/APIContext";
import { renderHook } from '@testing-library/react'

describe("#useAPI", () => {
    test('fetch data with API from mirage', () => {
        
        const wrapper = ({ children }) => <APIContextProvider>{children}</APIContextProvider>

        const { result } = renderHook(() => useAPI(), { wrapper })
        
        expect(result).toEqual(expect.anything())
        expect(result).toBeInstanceOf(Object)
    })
})