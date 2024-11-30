'use client';
// import { Metadata } from 'next';
import { createContext, useCallback, useContext, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'About'
// };

export default function About() {
  return <CompoundComponent />;
}

interface IMenuContext {
  activeGroup: string;
  switchGroup: (title: string) => void;
}

const MenuContext = createContext<IMenuContext>({} as IMenuContext);

const MenuAccordion = ({ children }: { children: React.ReactNode }) => {
  const [activeGroup, setActiveGroup] = useState("");

  const switchGroup = useCallback((title: string) => {
    setActiveGroup(activeTitle => activeTitle === title ? "" : title);
  }, []);

  return <MenuContext.Provider value={{ activeGroup, switchGroup }}>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>{children}</div>
    </MenuContext.Provider>;
};

type MenuGroupProps = {
  title: string;
  children: React.ReactNode;
};

MenuAccordion.Group = function MenuGroup({ title, children }: MenuGroupProps) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  return (
    <div>
      <button style={{ width: '200px' }} onClick={() => switchGroup(title)}>{title}</button>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

MenuAccordion.Item = function MenuItem({ title }: { title: string }) {
  return (
    <div>
      <div>{title}</div>
    </div>
  );
};

function CompoundComponent() {
  return (
    <div style={{ textAlign: 'center', fontSize: '50px', height: '80vh' }}>
      <MenuAccordion>
        <MenuAccordion.Group title='Меню'>
          <MenuAccordion.Item title='Пункт 1' />
          <MenuAccordion.Item title='Пункт 2' />
          <MenuAccordion.Item title='Пункт 3' />
        </MenuAccordion.Group>
        <MenuAccordion.Group title='О нас'>
          <MenuAccordion.Item title='Пункт 1' />
          <MenuAccordion.Item title='Пункт 2' />
          <MenuAccordion.Item title='Пункт 3' />
        </MenuAccordion.Group>
        <MenuAccordion.Group title='Служебное'>
          <MenuAccordion.Item title='Пункт 1' />
          <MenuAccordion.Item title='Пункт 2' />
          <MenuAccordion.Item title='Пункт 3' />
        </MenuAccordion.Group>
      </MenuAccordion>
    </div>
  );
}
