"use client";

import { useState } from "react";

export default function TestUploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  // Captura o arquivo selecionado
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Envia o formulário via fetch com FormData
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      setMessage("Selecione um arquivo para enviar.");
      return;
    }

    // Cria o FormData e adiciona o arquivo com o nome "profile"
    const formData = new FormData();
    formData.append("profile", selectedFile);

    try {
      const res = await fetch("/api/imagens", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setMessage(data.message || "Upload realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar arquivo:", error);
      setMessage("Erro ao enviar arquivo.");
    }
  };

  return (
    <div>
      <h1>Teste de Upload</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Escolha um arquivo:
          <input type="file" onChange={handleFileChange} name="profile" />
        </label>
        <button type="submit">Enviar Imagem</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
