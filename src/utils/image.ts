import color from 'color'

export async function getColorFromImage(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = src

    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, 128, 128)
      const data = imageData.data
      const values = []
      for (let i = 0; i < data.length; i += 4) {
        values.push({
          r: data[i],
          g: data[i + 1],
          b: data[i + 2],
        })
      }

      const result = color(quantize(values))
        .rotate(-45)
        .saturate(0.6)
        .lightness(50)
        .lch()
      const [l, c, h] = result.array()
      resolve(`lch(${l} ${c *2} ${h})`)
    }
  })
}

interface RGB {
  r: number
  g: number
  b: number
}
function quantize(colors: RGB[], depth = 0): RGB {
  const reduced = colors.reduce<RGB>(
    (acc, color) => {
      acc.r += color.r
      acc.g += color.g
      acc.b += color.b
      return acc
    },
    { r: 0, g: 0, b: 0 }
  )

  const total = colors.length

  return {
    r: Math.floor(reduced.r / total),
    g: Math.floor(reduced.g / total),
    b: Math.floor(reduced.b / total),
  }
}
