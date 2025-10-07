'use client';

import { X, Mail, Phone, MapPin, Globe, Monitor, Calendar } from 'lucide-react';
import type { Lead } from '@/types';

interface LeadDetailModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (leadId: string, newStatus: Lead['status']) => void;
}

const statusColors = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-800',
  converted: 'bg-green-100 text-green-800',
  lost: 'bg-red-100 text-red-800',
};

const statusLabels = {
  new: '신규',
  contacted: '연락중',
  converted: '전환',
  lost: '실패',
};

const sourceLabels = {
  organic: '자연 검색',
  paid: '유료 광고',
  referral: '추천',
  direct: '직접 방문',
};

export function LeadDetailModal({ lead, isOpen, onClose, onStatusChange }: LeadDetailModalProps) {
  if (!isOpen || !lead) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl rounded-lg bg-background p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{lead.name}</h2>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${statusColors[lead.status]}`}>
              {statusLabels[lead.status]}
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">연락처 정보</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{lead.email}</span>
              </div>
              {lead.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{lead.phone}</span>
                </div>
              )}
            </div>
          </div>

          {/* Metadata */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">추가 정보</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">유입 경로</p>
                  <p className="text-sm font-medium">{sourceLabels[lead.source]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">지역</p>
                  <p className="text-sm font-medium">{lead.metadata.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Monitor className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">디바이스</p>
                  <p className="text-sm font-medium">{lead.metadata.device}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">브라우저</p>
                  <p className="text-sm font-medium">{lead.metadata.browser}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">등록일</p>
                  <p className="text-sm font-medium">{lead.createdAt.toLocaleDateString('ko-KR')}</p>
                </div>
              </div>
              {lead.metadata.referrer && (
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">리퍼러</p>
                    <p className="text-sm font-medium">{lead.metadata.referrer}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status Management */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">상태 변경</h3>
            <div className="grid grid-cols-4 gap-2">
              {(Object.keys(statusLabels) as Array<keyof typeof statusLabels>).map((status) => (
                <button
                  key={status}
                  onClick={() => onStatusChange(lead.id, status)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    lead.status === status
                      ? statusColors[status]
                      : 'bg-background hover:bg-accent'
                  }`}
                >
                  {statusLabels[status]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="rounded-lg border bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
