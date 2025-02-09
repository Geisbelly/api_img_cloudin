// /app/api/imagens/route.ts
import { NextResponse } from 'next/server';
import { enviarImgProfile } from '../../../components/userRoutPost';

export async function GET() {
  return new Response('Oie', { status: 200 });
}

export async function POST(req: Request) {
  try{
    // Lê os dados do FormData
    const formData = await req.formData();
    const files = formData.getAll("profile").filter(item => item instanceof File) as File[];
    const resp = await enviarImgProfile({ profile: files });

    return NextResponse.json({ message: 'Imagem criada com sucesso', data: resp }, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar imagem:', error);
    return NextResponse.json({ error: 'Erro ao criar imagem' }, { status: 500 });
  }
}
