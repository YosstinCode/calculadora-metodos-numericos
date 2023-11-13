// TODO: crear funciones para correguir y pasar latex a notacion que acepte la grafica

import * as math from 'mathjs'

const methodNewton = (func, xi) => {
  // Derivadas de la funcion
  const dy = math.derivative(func, 'x')
  const dy2 = math.derivative(dy, 'x')

  let iteracion = 1

  const table = [['Iteración', 'Xi', 'f\'(x)', 'f\'\'(x)', 'Xi+1', 'Error Aproximado']]

  let x; let errorAproximado = 1; let arrayAux

  while (errorAproximado > 0.0001) {
    arrayAux = []

    arrayAux.push(iteracion)

    x = xi
    arrayAux.push(x)

    const dyx = dy.evaluate({ x: xi })
    arrayAux.push(math.round(dyx, 4))
    const dy2x = dy2.evaluate({ x: xi })
    arrayAux.push(math.round(dy2x, 4))

    // calculo del nuevo x
    xi = x - (dyx / dy2x)
    arrayAux.push(math.round(xi, 4))

    errorAproximado = Math.abs((xi - x) / xi)
    if (errorAproximado) {
      arrayAux.push(math.round(errorAproximado, 4))
    } else {
      arrayAux.push(0)
    }

    table.push(arrayAux)
    iteracion++
  }

  const totalX = table.map((item) => item[1])

  return { table, root: xi, totalX }
}

// console.table(methodNewton('-5x^2+3x-2', 0))

const methodBisection = (func, xi, xf) => {
  let iteracion = 1

  const table = [['i', 'Xi', 'Xf', 'Xr', 'f(xi)', 'f(xr)', 'Ea']]

  let x; let xr; let errorAproximado = 1; let arrayAux

  while (errorAproximado > 0.000001) {
    arrayAux = []

    arrayAux.push(iteracion)

    arrayAux.push(xi)
    arrayAux.push(xf)

    xr = math.round((xi + xf) / 2, 4)
    arrayAux.push(xr)

    const fxi = math.round(math.evaluate(func, { x: xi }), 4)
    arrayAux.push(fxi)
    const fxr = math.round(math.evaluate(func, { x: xr }), 4)
    arrayAux.push(fxr)

    if (fxi * fxr < 0) {
      xf = xr
    }
    if (fxi * fxr > 0) {
      xi = xr
    }

    if (iteracion > 1) {
      errorAproximado = Math.abs((xr - x) / xr)
    } else {
      errorAproximado = 1
    }
    arrayAux.push(math.round(errorAproximado, 6))

    table.push(arrayAux)

    if (fxi * fxr === 0) {
      break
    }

    x = xr
    iteracion++
  }

  const totalX = table.map((item) => item[3])

  return { table, root: xr, totalX }
}

// console.table(methodBisection('-0.5x^2 + 2.5x + 4.5', 5, 10).table)

export { methodNewton, methodBisection }
