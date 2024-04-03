function Breadcrumbs({ sections }: { sections: { link?: string; label: string }[] }) {
  return (
    <div className='text-sm breadcrumbs pb-4 pt-0 [&::-webkit-scrollbar]:hidden'>
      <ul className='lg:m-0 lg:p-0 p-0 m-0'>
        {sections.map(({ link, label }) => {
          return <li key={label}>{link ? <a href={link}>{label}</a> : label}</li>;
        })}
      </ul>
    </div>
  );
}

export { Breadcrumbs };
