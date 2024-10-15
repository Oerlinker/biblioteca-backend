import React, { useState } from 'react';
import axios from 'axios';

const EditName = ({ user }) => {
    const [nombre, setNombre] = useState(user.nombre);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/users/${user.id}`, { nombre });
            // Optionally, add a success message or redirect the user
        } catch (error) {
            console.error('Error updating name:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input
                    className="block w-full p-2 border border-gray-300 rounded"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Escribe tu nombre"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Actualizar</button>
        </form>
    );
};

export default EditName;