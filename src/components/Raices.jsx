const Raices = ({ metodo, root, froot }) => {
  return (
    <>
    <div className="font-Nunito w-60 flex flex-col items-center justify-center mx-auto text-center h-28 rounded-[20px] p-4 bg-white">

      <p className="text-lg text-Grisecito">
            {metodo !== 'Newton' ? `(${root}, ${0})` : `(${root}, ${froot})`}
      </p>
      <h3 className="font-semibold text-Negrito text-lg">
            {metodo !== 'Newton' ? 'Raiz' : 'Maximo o minimo'}
      </h3>
    </div>

    </>
  )
}

export default Raices
