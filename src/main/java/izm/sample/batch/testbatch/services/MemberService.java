package izm.sample.batch.testbatch.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import izm.sample.batch.testbatch.repositorys.MemberRepository;
import izm.sample.batch.testbatch.resources.MemberEntity;

@Service
public class MemberService {
    @Autowired
    private MemberRepository memberRepository;

    public List<MemberEntity> getMemberList() {
        return this.memberRepository.findAll();        
    }

    public MemberEntity getMemberById(String id) {
        return Optional.of(id).isEmpty() ? new MemberEntity() : 
         this.memberRepository.findById(id).get();
    }

    public MemberEntity saveMember(MemberEntity entity) {
        this.memberRepository.save(entity);
        return entity;
    }
}
