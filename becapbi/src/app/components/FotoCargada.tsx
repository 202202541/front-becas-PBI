import React, { useState } from 'react';

function FotoCargada() {
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío de la foto
    console.log("Foto subida:", photo);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-1xl mb-4">Sube tu foto 4x4 fondo rojo</h2>
      <div className="border-2 border-dashed border-gray-400 p-4 w-60  h-60 flex flex-col items-center justify-center">
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="mb-4 hidden"
          id="file-upload"
        />
        {photo ? (
          <img src={photo} alt="Previsualización" className="w-60 h-60 object-cover mt-4" />
        ) : (
          <p className="text-gray-500 flex " >No hay imagen seleccionada</p>
        )}
      </div>
      {photo ? (
        <div className="mt-4 flex space-x-4">
          <label htmlFor="file-upload" className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Cambiar Foto
          </label>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Subir Foto
          </button>
        </div>
      ) : (
        <button
          onClick={() => document.getElementById('file-upload')?.click()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Agregar Imagen
        </button>
      )}
    </div>
  );
}

export default FotoCargada;
