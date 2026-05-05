/**
 * Estilos reutilizáveis do projeto
 */

import { COLORS } from './colors';
import { SPACING, BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, SHADOWS, CARD, PANEL } from './sizes';

export const STYLES = {
  // Panels
  panelStyle: {
    background: COLORS.BG_WHITE,
    border: PANEL.BORDER,
    borderRadius: PANEL.BORDER_RADIUS,
    padding: PANEL.PADDING,
    boxShadow: PANEL.SHADOW,
  },

  // Títulos
  titleStyle: {
    margin: `0 0 ${SPACING.LG}px`,
    fontSize: FONT_SIZE.XL,
    fontWeight: FONT_WEIGHT.BOLD,
    color: COLORS.TEXT_PRIMARY,
  },

  subtitleStyle: {
    fontSize: FONT_SIZE.SM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: COLORS.TEXT_SECONDARY,
    margin: `0 0 ${SPACING.MD}px`,
  },

  // Cards
  cardStyle: {
    border: CARD.BORDER,
    padding: CARD.PADDING,
    borderRadius: CARD.BORDER_RADIUS,
    background: COLORS.BG_WHITE,
    boxShadow: CARD.SHADOW,
  },

  // Botões
  buttonPrimaryStyle: {
    padding: `${SPACING.SM}px ${SPACING.LG}px`,
    background: COLORS.PRIMARY,
    color: COLORS.BG_WHITE,
    border: 'none',
    borderRadius: BORDER_RADIUS.MD,
    cursor: 'pointer',
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    fontSize: FONT_SIZE.SM,
  },

  buttonCounterStyle: {
    width: 36,
    height: 36,
    borderRadius: BORDER_RADIUS.MD,
    border: `1px solid ${COLORS.BORDER_LIGHT}`,
    background: COLORS.BG_LIGHT,
    color: COLORS.TEXT_PRIMARY,
    cursor: 'pointer',
    fontSize: FONT_SIZE.BASE,
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
  },

  // Inputs
  inputStyle: {
    padding: SPACING.SM,
    fontSize: FONT_SIZE.SM,
    border: `1px solid ${COLORS.BORDER_LIGHT}`,
    borderRadius: BORDER_RADIUS.MD,
    background: COLORS.BG_WHITE,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'inherit',
    outline: 'none',
  },

  // Listas
  listStyle: {
    margin: 0,
    paddingLeft: SPACING.LG,
    display: 'grid',
    gap: SPACING.MD,
    listStyle: 'none',
  },

  listItemStyle: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: FONT_SIZE.SM,
  },

  // Feedback
  feedbackSuccessStyle: {
    background: COLORS.SUCCESS_BG,
    color: COLORS.SUCCESS,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.MD,
    fontSize: FONT_SIZE.SM,
  },

  feedbackErrorStyle: {
    background: COLORS.ERROR_BG,
    color: COLORS.ERROR_TEXT,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.MD,
    fontSize: FONT_SIZE.SM,
  },

  // Backgrounds especiais
  bgLightBlueStyle: {
    background: COLORS.BG_LIGHT,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.MD,
  },

  bgSuccessStyle: {
    background: COLORS.SUCCESS_BG,
    padding: SPACING.MD,
    borderRadius: BORDER_RADIUS.MD,
  },

  // Labels
  labelStyle: {
    display: 'block',
    fontSize: FONT_SIZE.XS,
    color: COLORS.TERTIARY,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: SPACING.SM,
  },
};
