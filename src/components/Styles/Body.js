import React, { useState } from "react";
import styled from "styled-components";

// --- Paleta de Colores ---
const PRIMARY_DARK_BLUE = "#14213d";
const HOVER_DARK_BLUE = "#1f3560";
const ACCENT_ORANGE = "#fca311";
const WHITE = "#ffffff";

// =====================
// COMPONENTES ESTILIZADOS
// =====================

export const BackGround = styled.div`
  background: linear-gradient(135deg, ${PRIMARY_DARK_BLUE} 0%, #0c1a2f 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const BodyContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.header`
  background: ${HOVER_DARK_BLUE};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid ${PRIMARY_DARK_BLUE};
  z-index: 10;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: ${PRIMARY_DARK_BLUE};

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

// === NUEVOS COMPONENTES CARD Y BUTTON ===
export const Card = styled.div`
  background-color: ${HOVER_DARK_BLUE};
  color: ${WHITE};
  border-radius: 0.75rem;
  padding: 1rem;
  border: 1px solid #334155;
`;

export const Button = styled.button`
  background-color: ${ACCENT_ORANGE};
  color: ${PRIMARY_DARK_BLUE};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e88d00;
  }
`;

// === BARRA DE BÚSQUEDA ===
const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.65rem 1rem 0.65rem 2.5rem;
  width: 22rem; /* más grande */
  border: 1px solid ${PRIMARY_DARK_BLUE};
  border-radius: 0.75rem;
  outline: none;
  background-color: #1a2742; /* color de fondo nuevo */
  color: ${WHITE};
  font-size: 0.95rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: rgba(255, 255, 255, 0.6);
`;

// =====================
// COMPONENTE PRINCIPAL
// =====================
const Body = ({ children, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BodyContainer>
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
            padding: "0 1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Botón menú */}
            <button
              onClick={toggleSidebar}
              style={{
                padding: "0.5rem",
                borderRadius: "0.375rem",
                color: WHITE,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* Icono hamburguesa */}
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                style={{ color: WHITE }}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Barra de búsqueda */}
            <SearchWrapper>
              <SearchIcon>🔍</SearchIcon>
              <SearchInput
                placeholder="Buscar productos, categorías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>
          </div>

          {/* Usuario */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                backgroundColor: ACCENT_ORANGE,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: PRIMARY_DARK_BLUE, fontSize: "0.875rem", fontWeight: "500" }}>
                U
              </span>
            </div>
            <span style={{ fontSize: "0.875rem", fontWeight: "500", color: WHITE }}>
              Usuario
            </span>
          </div>
        </div>
      </Header>

      <Main>
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>{children}</div>
      </Main>
    </BodyContainer>
  );
};

export default Body;
