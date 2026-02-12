import Link from 'next/link'

const page = () => {
  return (
    <div>
      <p>Tworzymy piękne pierścionki z kamieni naturalnych.</p>
      <p>
        Sklep jeszcze nie działa - póki co biżuterię możesz kupić tutaj:
        <Link href='https://www.vinted.pl/member/316530096' target="_blank">
          <b> KLIK</b> 
        </Link>
      </p>
    </div>
  )
}

export default page