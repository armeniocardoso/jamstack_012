import { NextResponse } from 'next/server';
import { getUsuarioPorEmail } from '../../../lib/infra/usuarios'
 
export async function GET(request: Request, {params}: {params: {id: string}}) {
  let usuario;
  try {
    usuario = await getUsuarioPorEmail(params.email);    
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({ data: usuario });
}
