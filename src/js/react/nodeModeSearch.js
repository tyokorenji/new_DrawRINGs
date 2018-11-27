//@flow
"use strict";

import { nodeModeType } from "./nodeModeType";
import { getColor } from "../script/data/getColor";

export function nodeModeSearch(target: string) {
    switch (target.toLowerCase()) {
        case "Hexose".toLowerCase(): return nodeModeType.HEXOSE;
        case "Glc".toLowerCase(): return nodeModeType.GLC;
        case "Man".toLowerCase(): return nodeModeType.MAN;
        case "Gal".toLowerCase(): return nodeModeType.GAL;
        case "Gul".toLowerCase(): return nodeModeType.GUL;
        case "Alt".toLowerCase(): return nodeModeType.ALT;
        case "All".toLowerCase(): return nodeModeType.ALL;
        case "Tal".toLowerCase(): return nodeModeType.TAL;
        case "Ido".toLowerCase(): return nodeModeType.IDO;
        case "HexNAc".toLowerCase(): return nodeModeType.HEXNAC;
        case "GlcNAc".toLowerCase(): return nodeModeType.GLCNAC;
        case "ManNAc".toLowerCase(): return nodeModeType.MANNAC;
        case "GalNAc".toLowerCase(): return nodeModeType.GALNAC;
        case "GulNAc".toLowerCase(): return nodeModeType.GULNAC;
        case "AltNAc".toLowerCase(): return nodeModeType.ALTNAC;
        case "AllNAc".toLowerCase(): return nodeModeType.ALLNAC;
        case "TalNAc".toLowerCase(): return nodeModeType.TALNAC;
        case "IdoNAc".toLowerCase(): return nodeModeType.IDONAC;
        case "Hexosamine".toLowerCase(): return nodeModeType.HEXOSAMINE;
        case "GlcN".toLowerCase(): return nodeModeType.GLCN;
        case "ManN".toLowerCase(): return nodeModeType.MANN;
        case "GalN".toLowerCase(): return nodeModeType.GALN;
        case "GulN".toLowerCase(): return nodeModeType.GULN;
        case "AltN".toLowerCase(): return nodeModeType.ALTN;
        case "AllN".toLowerCase(): return nodeModeType.ALLN;
        case "TalN".toLowerCase(): return nodeModeType.TALN;
        case "IdoN".toLowerCase(): return nodeModeType.IDON;
        case "Hexuronate".toLowerCase(): return nodeModeType.HEXURONATE;
        case "GlcA".toLowerCase(): return nodeModeType.GLCA;
        case "ManA".toLowerCase(): return nodeModeType.MANA;
        case "GalA".toLowerCase(): return nodeModeType.GALA;
        case "GulA".toLowerCase(): return nodeModeType.GULA;
        case "AltA".toLowerCase(): return nodeModeType.ALTA;
        case "AllA".toLowerCase(): return nodeModeType.ALLA;
        case "TalA".toLowerCase(): return nodeModeType.TALA;
        case "IdoA".toLowerCase(): return nodeModeType.IDOA;
        case "Deoxyhexose".toLowerCase(): return nodeModeType.DEOXYHEXOSE;
        case "Qui".toLowerCase(): return nodeModeType.QUI;
        case "Rha".toLowerCase(): return nodeModeType.RHA;
        case "6dGul".toLowerCase(): return nodeModeType.D6GUL;
        case "6dAlt".toLowerCase(): return nodeModeType.D6ALT;
        case "6dTal".toLowerCase(): return nodeModeType.D6TAL;
        case "Fuc".toLowerCase(): return nodeModeType.FUC;
        case "DeoxyhexNAc".toLowerCase(): return nodeModeType.DEOXYHEXNAC;
        case "QuiNAc".toLowerCase(): return nodeModeType.QUINAC;
        case "RhaNAc".toLowerCase(): return nodeModeType.RHANAC;
        case "6dAltNAc".toLowerCase(): return nodeModeType.D6ALTNAC;
        case "6dTalNAc".toLowerCase(): return nodeModeType.D6TALNAC;
        case "FucNAc".toLowerCase(): return nodeModeType.FUCNAC;
        case "Di-deoxyhexose".toLowerCase(): return nodeModeType.DI_DEOXYHEXOSE;
        case "Oli".toLowerCase(): return nodeModeType.OLI;
        case "Tyv".toLowerCase(): return nodeModeType.TYV;
        case "Abe".toLowerCase(): return nodeModeType.ABE;
        case "Par".toLowerCase(): return nodeModeType.PAR;
        case "Dig".toLowerCase(): return nodeModeType.DIG;
        case "Col".toLowerCase(): return nodeModeType.COL;
        case "Pentose".toLowerCase(): return nodeModeType.PENTOSE;
        case "Ara".toLowerCase(): return nodeModeType.ARA;
        case "Lyx".toLowerCase(): return nodeModeType.LYX;
        case "Xyl".toLowerCase(): return nodeModeType.XYL;
        case "Rib".toLowerCase(): return nodeModeType.RIB;
        case "Deoxynonulosonate".toLowerCase(): return nodeModeType.DEOXYNONULOSONATE;
        case "Kdn".toLowerCase(): return nodeModeType.KDN;
        case "Neu5Ac".toLowerCase(): return nodeModeType.NEU5AC;
        case "Neu5Gc".toLowerCase(): return nodeModeType.NEU5GC;
        case "Neu".toLowerCase(): return nodeModeType.NEU;
        case "Sia".toLowerCase(): return nodeModeType.SIA;
        case "Di-deoxynonulosonate".toLowerCase(): return nodeModeType.DI_DEOXYNONULOSONATE;
        case "Pse".toLowerCase(): return nodeModeType.PSE;
        case "Leg".toLowerCase(): return nodeModeType.LEG;
        case "Aci".toLowerCase(): return nodeModeType.ACI;
        case "4eLeg".toLowerCase(): return nodeModeType.E4LEG;
        case "Unknown".toLowerCase(): return nodeModeType.UNKNOWN;
        case "Bac".toLowerCase(): return nodeModeType.BAC;
        case "LDmanHep".toLowerCase(): return nodeModeType.LDMANHEP;
        case "Kdo".toLowerCase(): return nodeModeType.KDO;
        case "Dha".toLowerCase(): return nodeModeType.DHA;
        case "DDmanHep".toLowerCase(): return nodeModeType.DDMANHEP;
        case "MurNAc".toLowerCase(): return nodeModeType.MURNAC;
        case "MurNGc".toLowerCase(): return nodeModeType.MURNGC;
        case "Mur".toLowerCase(): return nodeModeType.MUR;
        case "Assigned".toLowerCase(): return nodeModeType.ASSIGNED;
        case "Api".toLowerCase(): return nodeModeType.API;
        case "Fru".toLowerCase(): return nodeModeType.FRU;
        case "Tag".toLowerCase(): return nodeModeType.TAG;
        case "Sor".toLowerCase(): return nodeModeType.SOR;
        case "Psi".toLowerCase(): return nodeModeType.PSI;
        default: return nodeModeType.NOT_SELECTED;
    }
}

export function nodeType(target: Symbol): Symbol {
    switch (target) {
        case nodeModeType.HEXOSE:
        case nodeModeType.GLC:
        case nodeModeType.MAN:
        case nodeModeType.GAL:
        case nodeModeType.GUL:
        case nodeModeType.ALT:
        case nodeModeType.ALL:
        case nodeModeType.TAL:
        case nodeModeType.IDO:
            return nodeModeType.HEXOSE;
        case  nodeModeType.HEXNAC:
        case nodeModeType.GLCNAC:
        case nodeModeType.MANNAC:
        case nodeModeType.GALNAC:
        case nodeModeType.GULNAC:
        case nodeModeType.ALTNAC:
        case nodeModeType.ALLNAC:
        case nodeModeType.TALNAC:
        case nodeModeType.IDONAC:
            return nodeModeType.HEXNAC;
        case  nodeModeType.HEXOSAMINE:
        case nodeModeType.GLCN:
        case nodeModeType.MANN:
        case nodeModeType.GALN:
        case nodeModeType.GULN:
        case nodeModeType.ALTN:
        case nodeModeType.ALLN:
        case nodeModeType.TALN:
        case nodeModeType.IDON:
            return nodeModeType.HEXOSAMINE;
        case  nodeModeType.HEXURONATE:
        case nodeModeType.GLCA:
        case nodeModeType.MANA:
        case nodeModeType.GALA:
        case nodeModeType.GULA:
        case nodeModeType.ALTA:
        case nodeModeType.ALLA:
        case nodeModeType.TALA:
        case nodeModeType.IDOA:
            return nodeModeType.HEXURONATE;
        case  nodeModeType.DEOXYHEXOSE:
        case nodeModeType.QUI:
        case nodeModeType.RHA:
        case nodeModeType.D6GUL:
        case nodeModeType.D6ALT:
        case nodeModeType.D6TAL:
        case nodeModeType.FUC:
            return nodeModeType.DEOXYHEXOSE;
        case  nodeModeType.DEOXYHEXNAC:
        case nodeModeType.QUINAC:
        case nodeModeType.RHANAC:
        case nodeModeType.D6ALTNAC:
        case nodeModeType.D6TALNAC:
        case nodeModeType.FUCNAC:
            return nodeModeType.DEOXYHEXNAC;
        case  nodeModeType.DI_DEOXYHEXOSE:
        case nodeModeType.OLI:
        case nodeModeType.TYV:
        case nodeModeType.ABE:
        case nodeModeType.PAR:
        case nodeModeType.DIG:
        case nodeModeType.COL:
            return nodeModeType.DI_DEOXYHEXOSE;
        case  nodeModeType.PENTOSE:
        case nodeModeType.ARA:
        case nodeModeType.LYX:
        case nodeModeType.XYL:
        case nodeModeType.RIB:
            return nodeModeType.PENTOSE;
        case  nodeModeType.DEOXYNONULOSONATE:
        case nodeModeType.KDN:
        case nodeModeType.NEU5AC:
        case nodeModeType.NEU5GC:
        case nodeModeType.NEU:
        case nodeModeType.SIA:
            return nodeModeType.DEOXYNONULOSONATE;
        case  nodeModeType.DI_DEOXYNONULOSONATE:
        case nodeModeType.PSE:
        case nodeModeType.LEG:
        case nodeModeType.ACI:
        case nodeModeType.E4LEG:
            return nodeModeType.DI_DEOXYNONULOSONATE;
        case  nodeModeType.UNKNOWN:
        case nodeModeType.BAC:
        case nodeModeType.LDMANHEP:
        case nodeModeType.KDO:
        case nodeModeType.DHA:
        case nodeModeType.DDMANHEP:
        case nodeModeType.MURNAC:
        case nodeModeType.MURNGC:
        case nodeModeType.MUR:
            return nodeModeType.UNKNOWN;
        case  nodeModeType.ASSIGNED:
        case nodeModeType.API:
        case nodeModeType.FRU:
        case nodeModeType.TAG:
        case nodeModeType.SOR:
        case nodeModeType.PSI:
            return nodeModeType.ASSIGNED;
        default:
            return nodeModeType.NOT_SELECTED;
    }

}

export const getSymbolColor = (SNFGNameSymbol: Symbol): string => {
    switch (SNFGNameSymbol) {
        case nodeModeType.HEXOSE:
        case nodeModeType.HEXNAC:
        case nodeModeType.HEXOSAMINE:
        case nodeModeType.HEXURONATE:
        case nodeModeType.DEOXYHEXOSE:
        case nodeModeType.DEOXYHEXNAC:
        case nodeModeType.DI_DEOXYHEXOSE:
        case nodeModeType.PENTOSE:
        case nodeModeType.DEOXYNONULOSONATE:
        case nodeModeType.DI_DEOXYNONULOSONATE:
        case nodeModeType.UNKNOWN:
        case nodeModeType.ASSIGNED:
            return getColor("white");
        case nodeModeType.GLC:
        case nodeModeType.GLCNAC:
        case nodeModeType.GLCN:
        case nodeModeType.GLCA:
        case nodeModeType.QUI:
        case nodeModeType.QUINAC:
        case nodeModeType.OLI:
        case nodeModeType.BAC:
        case nodeModeType.API:
            return getColor("blue");
        case nodeModeType.MAN:
        case nodeModeType.MANNAC:
        case nodeModeType.MANN:
        case nodeModeType.MANA:
        case nodeModeType.RHA:
        case nodeModeType.RHANAC:
        case nodeModeType.TYV:
        case nodeModeType.ARA:
        case nodeModeType.KDN:
        case nodeModeType.PSE:
        case nodeModeType.LDMANHEP:
        case nodeModeType.FRU:
            return getColor("green");
        case nodeModeType.GAL:
        case nodeModeType.GALNAC:
        case nodeModeType.GALN:
        case nodeModeType.GALA:
        case nodeModeType.LYX:
        case nodeModeType.LEG:
        case nodeModeType.KDO:
        case nodeModeType.TAG:
            return getColor("yellow");
        case nodeModeType.GUL:
        case nodeModeType.GULNAC:
        case nodeModeType.GULN:
        case nodeModeType.GULA:
        case nodeModeType.D6GUL:
        case nodeModeType.ABE:
        case nodeModeType.XYL:
        case nodeModeType.DHA:
        case nodeModeType.SOR:
            return getColor("orange");
        case nodeModeType.ALT:
        case nodeModeType.ALTNAC:
        case nodeModeType.ALTN:
        case nodeModeType.ALTA:
        case nodeModeType.D6ALT:
        case nodeModeType.D6ALTNAC:
        case nodeModeType.PAR:
        case nodeModeType.RIB:
        case nodeModeType.ACI:
        case nodeModeType.DDMANHEP:
        case nodeModeType.PSI:
            return getColor("pink");
        case nodeModeType.ALL:
        case nodeModeType.ALLNAC:
        case nodeModeType.ALLN:
        case nodeModeType.ALLA:
        case nodeModeType.DIG:
        case nodeModeType.NEU5AC:
        case nodeModeType.MURNAC:
            return getColor("purple");
        case nodeModeType.TAL:
        case nodeModeType.TALNAC:
        case nodeModeType.TALN:
        case nodeModeType.TALA:
        case nodeModeType.D6TAL:
        case nodeModeType.D6TALNAC:
        case nodeModeType.COL:
        case nodeModeType.NEU5GC:
        case nodeModeType.E4LEG:
        case nodeModeType.MURNGC:
            return getColor("light_blue");
        case nodeModeType.IDO:
        case nodeModeType.IDONAC:
        case nodeModeType.IDON:
        case nodeModeType.IDOA:
        case nodeModeType.NEU:
        case nodeModeType.MUR:
            return getColor("brown");
        case nodeModeType.FUC:
        case nodeModeType.FUCNAC:
        case nodeModeType.SIA:
            return getColor("red");
        default: return "";

    }

};