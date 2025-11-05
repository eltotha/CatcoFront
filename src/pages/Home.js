import React, { useState } from 'react';
import SideBars from '../components/SideBars';
import Body from '../components/Styles/Body';
import styled from 'styled-components';

// --- Paleta de Colores Elegante y Profesional ---
const PRIMARY_DARK_BLUE = '#14213d'; // Azul Oxford (Principal, texto oscuro)
const ACCENT_ORANGE = '#fca311';     // Naranja Web (Acento, CTA)
const WHITE = '#ffffff';             // Fondo de tarjetas y campos
const TEXT_DARK = PRIMARY_DARK_BLUE; // Texto principal
const TEXT_SECONDARY = '#457b9d';    // Azul/Gris secundario
const DANGER_RED = '#dc2626';        // Rojo para eliminar
const SUCCESS_GREEN = '#059669';     // Verde para el texto "disponible" del presupuesto

// Componentes styled para el Home
const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  /* 1. FONDO CON DEGRADADO AZUL/GRIS OSCURO */
  background: linear-gradient(135deg, ${PRIMARY_DARK_BLUE} 0%, #0c1a2f 100%); 
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  /* 2. LO ÚNICO BLANCO: La tarjeta */
  background: ${WHITE};
  padding: 1.5rem;
  border-radius: 1rem; /* Borde más redondeado */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Sombra más pronunciada */
  border: none; /* Se elimina el borde sutil */
`;

const StatNumber = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
  margin: 0.5rem 0 0 0;
  color: ${props => props.color || PRIMARY_DARK_BLUE}; 
`;

const StatTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: ${TEXT_SECONDARY}; 
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: ${WHITE}; /* Título de sección en blanco para el fondo oscuro */
`;


const ProgressBar = styled.div`
  width: 100%;
  background-color: #e0e0e0; /* Gris muy suave para el fondo (antes #457b9d) */
  border-radius: 0.5rem; /* Menos redondeado */
  height: 0.75rem; /* Un poco más alta (antes 0.5rem) */
  margin: 0.5rem 0; /* Más margen */
`;

const ProgressFill = styled.div`
  background-color: ${props => props.fillColor || ACCENT_ORANGE}; 
  height: 100%;
  border-radius: 0.5rem; /* Coincide con el contenedor */
  width: ${props => props.percentage}%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra para darle profundidad */
  transition: width 0.4s ease-in-out; /* Transición suave para el efecto de llenado */
`;
// ==========================================================

const BudgetText = styled.span`
  font-size: 0.875rem;
  color: ${props => props.color || TEXT_SECONDARY}; 
  font-weight: ${props => props.bold ? '600' : 'normal'};
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${ACCENT_ORANGE}; 
  color: ${PRIMARY_DARK_BLUE}; /* Texto oscuro en botón naranja */
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #e88d00; 
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${WHITE}; /* 2. LO ÚNICO BLANCO: La tabla */
  border-radius: 1rem; /* Borde más redondeado */
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  border: none;
`;

const TableHeader = styled.thead`
  background-color: #f3f4f6; /* Fondo de cabecera gris claro */
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e5e5;
  &:hover {
    background-color: #f7f7f7; 
  }
`;

const TableHeaderCell = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.875rem; /* Fuente ligeramente más grande */
  font-weight: 700; 
  color: ${PRIMARY_DARK_BLUE}; 
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TableCell = styled.td`
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: ${props => props.color || TEXT_DARK}; 
`;

const ActionButton = styled.button`
  color: ${props => props.color};
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin: 0 0.5rem;
  padding: 0;

  &:hover {
    text-decoration: underline;
    opacity: 0.9;
  }
`;

const Home = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const inventoryData = [
    { id: 1, name: 'Laptop Dell XPS', category: 'Electrónicos', quantity: 15, price: 1200 },
    { id: 2, name: 'Mouse Inalámbrico', category: 'Accesorios', quantity: 45, price: 25 },
    { id: 3, name: 'Monitor 24"', category: 'Electrónicos', quantity: 20, price: 300 },
    { id: 4, name: 'Teclado Mecánico', category: 'Accesorios', quantity: 30, price: 80 },
  ];

  const budgetData = {
    total: 50000,
    used: 28500,
    remaining: 21500
  };

  // ... (DashboardContent, InventoryContent, BudgetContent y renderContent sin cambios en la lógica)
  const DashboardContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <SectionTitle>Dashboard</SectionTitle> {/* Nuevo título blanco */}
      <GridContainer>
        <Card>
          <StatTitle>Productos en Inventario</StatTitle>
          <StatNumber>{inventoryData.reduce((acc, item) => acc + item.quantity, 0)}</StatNumber>
        </Card>
        <Card>
          <StatTitle>Categorías</StatTitle>
          <StatNumber>8</StatNumber>
        </Card>
        <Card>
          <StatTitle>Stock Bajo</StatTitle>
          <StatNumber color={ACCENT_ORANGE}>12</StatNumber>
        </Card>
      </GridContainer>

      <Card>
        <StatTitle>Resumen de Presupuesto</StatTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <FlexBetween>
              <BudgetText color={TEXT_DARK}>Presupuesto Utilizado</BudgetText>
              <BudgetText color={TEXT_DARK}>${budgetData.used.toLocaleString()} / ${budgetData.total.toLocaleString()}</BudgetText>
            </FlexBetween>
            <ProgressBar>
              <ProgressFill percentage={(budgetData.used / budgetData.total) * 100} />
            </ProgressBar>
          </div>
          <BudgetText bold style={{ color: SUCCESS_GREEN, fontWeight: '500' }}>
            ${budgetData.remaining.toLocaleString()} disponibles
          </BudgetText>
        </div>
      </Card>
    </div>
  );

  const InventoryContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <FlexBetween>
        <SectionTitle>Gestión de Inventario</SectionTitle>
        <Button>Agregar Producto</Button>
      </FlexBetween>
      
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Producto</TableHeaderCell>
            <TableHeaderCell>Categoría</TableHeaderCell>
            <TableHeaderCell>Cantidad</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {inventoryData.map((item) => (
            <TableRow key={item.id}>
              <TableCell style={{ fontWeight: '500', color: TEXT_DARK }}>{item.name}</TableCell>
              <TableCell color={TEXT_SECONDARY}>{item.category}</TableCell>
              <TableCell color={TEXT_SECONDARY}>{item.quantity}</TableCell>
              <TableCell color={TEXT_SECONDARY}>${item.price}</TableCell>
              <TableCell>
                <ActionButton color={ACCENT_ORANGE}>Editar</ActionButton>
                <ActionButton color={DANGER_RED}>Eliminar</ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );

  const BudgetContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <SectionTitle>Gestión de Presupuesto</SectionTitle>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
        <Card>
          <StatTitle style={{ marginBottom: '1rem' }}>Resumen Presupuestario</StatTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <FlexBetween>
              <BudgetText color={TEXT_DARK}>Presupuesto Total:</BudgetText>
              <BudgetText bold style={{ color: PRIMARY_DARK_BLUE, fontSize: '1.125rem' }}>
                ${budgetData.total.toLocaleString()}
              </BudgetText>
            </FlexBetween>
            <FlexBetween>
              <BudgetText color={TEXT_DARK}>Utilizado:</BudgetText>
              <BudgetText bold style={{ color: ACCENT_ORANGE, fontSize: '1.125rem' }}>
                ${budgetData.used.toLocaleString()}
              </BudgetText>
            </FlexBetween>
            <FlexBetween>
              <BudgetText color={TEXT_DARK}>Disponible:</BudgetText>
              <BudgetText bold style={{ color: SUCCESS_GREEN, fontSize: '1.125rem' }}>
                ${budgetData.remaining.toLocaleString()}
              </BudgetText>
            </FlexBetween>
          </div>
        </Card>
        
        <Card>
          <StatTitle style={{ marginBottom: '1rem' }}>Distribución por Categorías</StatTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <FlexBetween>
                <BudgetText color={TEXT_DARK}>Electrónicos</BudgetText>
                <BudgetText color={TEXT_DARK}>65%</BudgetText>
              </FlexBetween>
              <ProgressBar>
                {/* Se mantiene el ACCENT_ORANGE */}
                <ProgressFill percentage={65} fillColor={ACCENT_ORANGE} /> 
              </ProgressBar>
            </div>
            <div>
              <FlexBetween>
                <BudgetText color={TEXT_DARK}>Accesorios</BudgetText>
                <BudgetText color={TEXT_DARK}>25%</BudgetText>
              </FlexBetween>
              <ProgressBar>
                {/* Se mantiene el PRIMARY_DARK_BLUE */}
                <ProgressFill percentage={25} fillColor={PRIMARY_DARK_BLUE} /> 
              </ProgressBar>
            </div>
            <div>
              <FlexBetween>
                <BudgetText color={TEXT_DARK}>Otros</BudgetText>
                <BudgetText color={TEXT_DARK}>10%</BudgetText>
              </FlexBetween>
              <ProgressBar>
                {/* Se mantiene el TEXT_SECONDARY */}
                <ProgressFill percentage={10} fillColor={TEXT_SECONDARY} /> 
              </ProgressBar>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardContent />;
      case 'inventory':
        return <InventoryContent />;
      case 'budget':
        return <BudgetContent />;
      default:
        return <DashboardContent />;
    }
  };


  return (
    <HomeContainer>
      <SideBars 
        isOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar}
        activeView={activeView}
        setActiveView={setActiveView}
        onLogout={onLogout}
        // Se asume que SideBars también toma en cuenta estos colores en sus estilos
      />
      <Body toggleSidebar={toggleSidebar}>
        {renderContent()}
      </Body>
    </HomeContainer>
  );
};

export default Home;