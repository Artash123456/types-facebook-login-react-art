// Type definitions for Gamedig 4.0
// Project: https://github.com/sonicsnes/node-gamedig
// Definitions by: Ivan Sieder <https://github.com/ivansieder>
//                 Pascal Sthamer <https://github.com/p4sca1>
//                 Joshua Schmeder <https://github.com/MaximumWoahverdrive>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class Gamedig {
    constructor(runnerOpts?: { listenUdpPort?: number | undefined });
    query(options: Gamedig.QueryOptions): Promise<Gamedig.QueryResult>;
    query(options: Gamedig.QueryOptions, callback: (error: Error, state: Gamedig.QueryResult) => void): void;

    static query(options: Gamedig.QueryOptions): Promise<Gamedig.QueryResult>;
    static query(options: Gamedig.QueryOptions, callback: (error: Error, state: Gamedig.QueryResult) => void): void;
    static getInstance(): Gamedig;
}
declare namespace Gamedig {
    type Type =
        | '7d2d'
        | 'ageofchivalry'
        | 'aoe2'
        | 'alienarena'
        | 'alienswarm'
        | 'arkse'
        | 'assettocorsa'
        | 'atlas'
        | 'avp2'
        | 'avp2010'
        | 'americasarmy'
        | 'americasarmy2'
        | 'americasarmy3'
        | 'americasarmypg'
        | 'arcasimracing'
        | 'arma'
        | 'arma2'
        | 'arma2oa'
        | 'armacwa'
        | 'armar'
        | 'arma3'
        | 'armagetron'
        | 'baldursgate'
        | 'barotrauma'
        | 'bat1944'
        | 'bf1942'
        | 'bfv'
        | 'bf2'
        | 'bf2142'
        | 'bfbc2'
        | 'bf3'
        | 'bf4'
        | 'bfh'
        | 'breach'
        | 'breed'
        | 'brink'
        | 'buildandshoot'
        | 'cod'
        | 'coduo'
        | 'cod2'
        | 'cod3'
        | 'cod4'
        | 'codwaw'
        | 'codmw2'
        | 'codmw3'
        | 'callofjuarez'
        | 'chaser'
        | 'chrome'
        | 'codenameeagle'
        | 'commandos3'
        | 'cacrenegade'
        | 'conanexiles'
        | 'contagion'
        | 'contactjack'
        | 'cs15'
        | 'cs16'
        | 'cs2d'
        | 'cscz'
        | 'css'
        | 'csgo'
        | 'crossracing'
        | 'crysis'
        | 'crysiswars'
        | 'crysis2'
        | 'daikatana'
        | 'dmomam'
        | 'darkesthour'
        | 'daysofwar'
        | 'dayz'
        | 'dayzmod'
        | 'deadlydozenpt'
        | 'dh2005'
        | 'descent3'
        | 'deusex'
        | 'devastation'
        | 'dinodday'
        | 'dirttrackracing2'
        | 'discord'
        | 'dnl'
        | 'dod'
        | 'dods'
        | 'doi'
        | 'doom3'
        | 'dota2'
        | 'drakan'
        | 'empyrion'
        | 'etqw'
        | 'fear'
        | 'f12002'
        | 'f1c9902'
        | 'farcry'
        | 'farcry2'
        | 'fortressforever'
        | 'operationflashpoint'
        | 'flashpoint'
        | 'flashpointresistance'
        | 'ffow'
        | 'fivem'
        | 'forrest'
        | 'garrysmod'
        | 'graw'
        | 'graw2'
        | 'giantscitizenkabuto'
        | 'globaloperations'
        | 'geneshift'
        | 'mutantfactions'
        | 'ges'
        | 'gore'
        | 'groundbreach'
        | 'gunmanchronicles'
        | 'hldm'
        | 'hldms'
        | 'hl2dm'
        | 'halo'
        | 'halo2'
        | 'heretic2'
        | 'hexen2'
        | 'hidden'
        | 'hll'
        | 'had2'
        | 'homefront'
        | 'homeworld2'
        | 'hurtworld'
        | 'igi2'
        | 'il2'
        | 'insurgency'
        | 'insurgencysandstorm'
        | 'ironstorm'
        | 'jamesbondnightfire'
        | 'jc2mp'
        | 'jc3mp'
        | 'killingfloor'
        | 'killingfloor2'
        | 'kingpin'
        | 'kisspc'
        | 'kspdmp'
        | 'kzmod'
        | 'left4dead'
        | 'left4dead2'
        | 'm2mp'
        | 'm2o'
        | 'medievalengineers'
        | 'mohaa'
        | 'mohsh'
        | 'mohbt'
        | 'mohpa'
        | 'mohab'
        | 'moh2010'
        | 'mohwf'
        | 'minecraft'
        | 'minecraftping'
        | 'minecraftpe'
        | 'minecraftbe'
        | 'mnc'
        | 'mordhau'
        | 'mtavc'
        | 'mtasa'
        | 'mumble'
        | 'mumbleping'
        | 'nascarthunder2004'
        | 'netpanzer'
        | 'nmrih'
        | 'ns'
        | 'ns2'
        | 'nfshp2'
        | 'nab'
        | 'nwn'
        | 'nwn2'
        | 'nexuiz'
        | 'nitrofamily'
        | 'nolf'
        | 'nolf2'
        | 'nucleardawn'
        | 'openarena'
        | 'openttd'
        | 'painkiller'
        | 'pixark'
        | 'ps'
        | 'postal2'
        | 'prey'
        | 'primalcarnage'
        | 'prbf2'
        | 'przomboid'
        | 'quake1'
        | 'quake2'
        | 'quake3'
        | 'quake4'
        | 'quakelive'
        | 'ragdollkungfu'
        | 'r6'
        | 'r6roguespear'
        | 'r6ravenshield'
        | 'rallisportchallenge'
        | 'rallymasters'
        | 'redorchestra'
        | 'redorchestraost'
        | 'redorchestra2'
        | 'redline'
        | 'rtcw'
        | 'rfactor'
        | 'ricochet'
        | 'riseofnations'
        | 'rs2'
        | 'rune'
        | 'rust'
        | 'samp'
        | 'savage2'
        | 'spaceengineers'
        | 'ss'
        | 'ss2'
        | 'shatteredhorizon'
        | 'ship'
        | 'shogo'
        | 'shootmania'
        | 'sin'
        | 'sinep'
        | 'soldat'
        | 'sof'
        | 'sof2'
        | 'stalker'
        | 'stbc'
        | 'stvef'
        | 'stvef2'
        | 'squad'
        | 'swbf'
        | 'swbf2'
        | 'swjk'
        | 'swjk2'
        | 'swrc'
        | 'starbound'
        | 'starmade'
        | 'starsiege'
        | 'suicidesurvival'
        | 'swat4'
        | 'svencoop'
        | 'synergy'
        | 'tacticalops'
        | 'takeonhelicopters'
        | 'teamfactor'
        | 'tfc'
        | 'tf2'
        | 'teamspeak2'
        | 'teamspeak3'
        | 'terminus'
        | 'terraria'
        | 'tshock'
        | 'thps3'
        | 'thps4'
        | 'thu2'
        | 'towerunite'
        | 'trackmania2'
        | 'trackmaniaforever'
        | 'tremulous'
        | 'tribes1'
        | 'tribesvengeance'
        | 'tron20'
        | 'turok2'
        | 'universalcombat'
        | 'unreal'
        | 'unturned'
        | 'ut'
        | 'ut2003'
        | 'ut2004'
        | 'ut3'
        | 'urbanterror'
        | 'v8supercar'
        | 'valheim'
        | 'vcmp'
        | 'ventrilo'
        | 'vietcong'
        | 'vietcong2'
        | 'warsow'
        | 'wheeloftime'
        | 'wolfenstein2009'
        | 'wolfensteinet'
        | 'xpandrally'
        | 'zombiemaster'
        | 'zps';

    interface Player {
        name?: string | undefined;
        ping?: number | undefined;
        score?: number | undefined;
        team?: string | undefined;
        address?: string | undefined;
        raw?: object | undefined;
    }

    interface QueryOptions {
        type: Type;
        host: string;
        port?: number | undefined;
        maxAttempts?: number | undefined;
        socketTimeout?: number | undefined;
        attemptTimeout?: number | undefined;
        givenPortOnly?: boolean | undefined;
        ipFamily?: 0 | 4 | 6 | undefined;
        debug?: boolean | undefined;
        requestRules?: boolean | undefined;
    }

    interface QueryResult {
        name: string;
        map: string;
        password: boolean;
        maxplayers: number;
        players: Player[];
        bots: Player[];
        connect: string;
        ping: number;
        raw?: object | undefined;
    }
}
export = Gamedig;