//@flow
"use strict";

import { nodeModeType } from "./nodeModeType";

export function nodeModeSearch(target: string) {
    switch (target) {
        case "Hexose": return nodeModeType.HEXOSE;
        case "Glc": return nodeModeType.GLC;
        case "Man": return nodeModeType.MAN;
        case "Gal": return nodeModeType.GAL;
        case "Gul": return nodeModeType.GUL;
        case "Alt": return nodeModeType.ALT;
        case "All": return nodeModeType.ALL;
        case "Tal": return nodeModeType.TAL;
        case "Ido": return nodeModeType.IDO;
        case "HexNAc": return nodeModeType.HEXNAC;
        case "GlcNAc": return nodeModeType.GLCNAC;
        case "ManNAc": return nodeModeType.MANNAC;
        case "GalNAc": return nodeModeType.GALNAC;
        case "GulNAc": return nodeModeType.GULNAC;
        case "AltNAc": return nodeModeType.ALTNAC;
        case "AllNAc": return nodeModeType.ALLNAC;
        case "TalNAc": return nodeModeType.TALNAC;
        case "IdoNAc": return nodeModeType.IDONAC;
        case "Hexosamine": return nodeModeType.HEXOSAMINE;
        case "GlcN": return nodeModeType.GLCN;
        case "ManN": return nodeModeType.MANN;
        case "GalN": return nodeModeType.GALN;
        case "GulN": return nodeModeType.GULN;
        case "AltN": return nodeModeType.ALTN;
        case "AllN": return nodeModeType.ALLN;
        case "TalN": return nodeModeType.TALN;
        case "IdoN": return nodeModeType.IDON;
        case "Hexuronate": return nodeModeType.HEXURONATE;
        case "GlcA": return nodeModeType.GLCA;
        case "ManA": return nodeModeType.MANA;
        case "GalA": return nodeModeType.GALA;
        case "GulA": return nodeModeType.GULA;
        case "AltA": return nodeModeType.ALTA;
        case "AllA": return nodeModeType.ALLA;
        case "TalA": return nodeModeType.TALA;
        case "IdoA": return nodeModeType.IDOA;
        case "Deoxyhexose": return nodeModeType.DEOXYHEXOSE;
        case "Qui": return nodeModeType.QUI;
        case "Rha": return nodeModeType.RHA;
        case "6dGul": return nodeModeType.D6GUL;
        case "6dAlt": return nodeModeType.D6ALT;
        case "6dTal": return nodeModeType.D6TAL;
        case "Fuc": return nodeModeType.FUC;
        case "DeoxyhexNAc": return nodeModeType.DEOXYHEXNAC;
        case "QuiNAc": return nodeModeType.QUINAC;
        case "RhaNAc": return nodeModeType.RHANAC;
        case "6dAltNAc": return nodeModeType.D6ALTNAC;
        case "6dTalNAc": return nodeModeType.D6TALNAC;
        case "FucNAc": return nodeModeType.FUCNAC;
        case "Di-deoxyhexose": return nodeModeType.DI_DEOXYHEXOSE;
        case "Oli": return nodeModeType.OLI;
        case "Tyv": return nodeModeType.TYV;
        case "Abe": return nodeModeType.ABE;
        case "Par": return nodeModeType.PAR;
        case "Dig": return nodeModeType.DIG;
        case "Col": return nodeModeType.COL;
        case "Pentose": return nodeModeType.PENTOSE;
        case "Ara": return nodeModeType.ARA;
        case "Lyx": return nodeModeType.LYX;
        case "Xyl": return nodeModeType.XYL;
        case "Rib": return nodeModeType.RIB;
        case "Deoxynonulosonate": return nodeModeType.DEOXYNONULOSONATE;
        case "Kdn": return nodeModeType.KDN;
        case "Neu5Ac": return nodeModeType.NEU5AC;
        case "Neu5Gc": return nodeModeType.NEU5GC;
        case "Neu": return nodeModeType.NEU;
        case "Sia": return nodeModeType.SIA;
        case "Di-deoxynonulosonate": return nodeModeType.DI_DEOXYNONULOSONATE;
        case "Pse": return nodeModeType.PSE;
        case "Leg": return nodeModeType.LEG;
        case "Aci": return nodeModeType.ACI;
        case "4eLeg": return nodeModeType.E4LEG;
        case "Unknown": return nodeModeType.UNKNOWN;
        case "Bac": return nodeModeType.BAC;
        case "LDmanHep": return nodeModeType.LDMANHEP;
        case "Kdo": return nodeModeType.KDO;
        case "Dha": return nodeModeType.DHA;
        case "DDmanHep": return nodeModeType.DDMANHEP;
        case "MurNAc": return nodeModeType.MURNAC;
        case "MurNGc": return nodeModeType.MURNGC;
        case "Mur": return nodeModeType.MUR;
        case "Assigned": return nodeModeType.ASSIGNED;
        case "Api": return nodeModeType.API;
        case "Fru": return nodeModeType.FRU;
        case "Tag": return nodeModeType.TAG;
        case "Sor": return nodeModeType.SOR;
        case "Psi": return nodeModeType.PSI;
        default: return nodeModeType.NOT_SELECTED;
    }
}

export function nodeType(target: Symbol) {
    switch (target) {
        case  nodeModeType.HEXOSE:
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
            return nodeModeType.DEOXYHEXOSE;
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