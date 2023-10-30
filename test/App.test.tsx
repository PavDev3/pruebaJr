import { describe, test, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render , screen } from '@testing-library/react'
import App from '../src/App'


// Si solo puedes hacer un test, haz un end-to-end test
// Con Testing Library User Event, para simular un usuario


describe('App', () => {
  test('should add a new item and remove it', async () => {
    // creamos un usuario
    const user = userEvent.setup()
    render(<App />)

    // creamos un random text
    const randomText = crypto.randomUUID()

    // usuario busca el input
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()

    // búsqueda del formulario
    const form = screen.getByRole('form')
    expect(form).toBeDefined()

    // usuario usa el botón de añadir
    const button = form.querySelector('button')
    expect(button).toBeDefined()

    // usuario escribe en el input
    await user.type(input, randomText)
    await user.click(button!)

    // asegurarnos de que se ha añadido el elemento
    const list = screen.getByRole('list')
    expect(list).toBeDefined()

    expect(list.childNodes.length).toBe(1)


    // asegurarnos de que se ha eliminado el elemento
    const item = screen.getByText(randomText)
    const removeButton = item.querySelector('Eliminar todos')
    expect(removeButton).toBeDefined()
    await user.click(removeButton!)

  })
})